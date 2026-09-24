"use client";
import { useEffect, useState } from "react";

export default function AnalyticsDebugPanel(){
  const [items,setItems]=useState<Array<Record<string,unknown>>>([]);
  useEffect(()=>{if(process.env.NODE_ENV==="production"||process.env.NEXT_PUBLIC_ANALYTICS_DEBUG!=="true")return;const handler=(event:Event)=>setItems(current=>[...(current.slice(-19)),(event as CustomEvent).detail]);window.addEventListener("thevulgo:analytics-debug",handler);return()=>window.removeEventListener("thevulgo:analytics-debug",handler)},[]);
  if(process.env.NODE_ENV==="production"||process.env.NEXT_PUBLIC_ANALYTICS_DEBUG!=="true")return null;
  return <aside className="fixed bottom-3 right-3 z-[200] max-h-72 w-[min(420px,calc(100vw-24px))] overflow-auto rounded-2xl bg-black/95 p-3 font-mono text-[10px] text-green-300 shadow-2xl"><b>Analytics debug · sanitized</b>{items.map((item,index)=><pre key={index} className="mt-2 whitespace-pre-wrap border-t border-white/10 pt-2">{JSON.stringify(item,null,2)}</pre>)}</aside>
}

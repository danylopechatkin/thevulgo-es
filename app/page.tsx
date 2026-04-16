import {redirect} from "next/navigation";

export default function Home() {
  redirect("/en"); // можно потом сделать автоопределение
}
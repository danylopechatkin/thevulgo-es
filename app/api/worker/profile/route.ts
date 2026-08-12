export async function PATCH() {
  return Response.json(
    { error: "Worker profile information is managed by THEVULGO administration." },
    { status: 403 },
  );
}

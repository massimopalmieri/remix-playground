import {Outlet, useNavigate, useParams} from '@remix-run/react';
import {json, LoaderFunction, redirect} from '@remix-run/node';

export const loader: LoaderFunction = ({params}) => {

  if (!params.id) {
    return redirect(`/test/123`)
  }

  return null
}

export default function Test() {
  const params = useParams()
  const navigate = useNavigate()

  if (!params.id) {
     navigate(`/test/123`)
    return null
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Test page</h1>

      <Outlet/>
    </div>
  );
}

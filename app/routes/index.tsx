import {Link} from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
     <Link to='/test'>test page</Link>
    </div>
  );
}

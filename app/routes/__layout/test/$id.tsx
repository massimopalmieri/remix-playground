import {json, LoaderFunction} from '@remix-run/node';
import {useLoaderData, useParams} from '@remix-run/react';

export const loader: LoaderFunction = ({params}) => {
  console.log('id loader')
  return json({
    data: `hello ${params.id}`
  })
}

export default function TestDetail() {
  const {data} = useLoaderData()

  return (
    <div>
      <p>detail: {data}</p>
    </div>
  );
}

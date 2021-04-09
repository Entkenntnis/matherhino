import Head from 'next/head'

export function Loading() {
  return (
    <>
      <Head>
        <title>MatheRhino</title>
      </Head>
      <div className="flex justify-center items-center h-full">
        <div
          className="w-6 h-6 border-2 border-lime-500 rounded-full animate-spin"
          style={{ borderRightColor: 'transparent' }}
        ></div>
      </div>
    </>
  )
}

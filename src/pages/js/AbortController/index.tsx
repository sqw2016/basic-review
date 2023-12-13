import { useState, useMemo, useEffect } from "react"

const url = "https://picsum.photos/5000/2000";

// 消除异步传染性
const AbortControllerView = () => {
  const controller = useMemo(() => new AbortController(), []);
  const signal = controller.signal;
  const [loading, setLoading] = useState<boolean>(false);

  const startFetch = (timeout: boolean = false) => {
    setLoading(true)
    const fetch = window.originFetch || window.fetch;
    fetch(url, { signal: timeout ? AbortSignal.timeout(2000) : signal }).then(res => {
      console.log("下载完成", res)
    }).catch(err => {
      console.log("下载错误", err)
    }).finally(() => {
      setLoading(false)
    })
  }

  const abortFetch = () => {
    console.log("中止请求")
    controller.abort()
  }

  useEffect(() => {
    const handleAbort = (e) => {
      console.log("请求中止", e)
    }
    signal.addEventListener('abort', handleAbort)

    return () => {
      signal.removeEventListener('abort', handleAbort)
    }
  }, [])


  return <div style={{padding: 20}}>
    <h1>AbortController 中止通信</h1>
    <h2>通过 AbortController.abort 手动中止</h2>
    <button disabled={loading} onClick={() => { startFetch() }}>启动</button><button disabled={!loading} onClick={abortFetch}>中止</button>
    <h2>通过 AbortSignal.timeout 超时自动中止</h2>
    <button disabled={loading} onClick={() => { startFetch(true) }}>2秒后自动中止</button>
    <div>{loading ? "加载中" : "中止"}</div>
  </div>
}

export default AbortControllerView
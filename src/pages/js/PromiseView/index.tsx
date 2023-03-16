const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

const PromiseView = () => {

  function getUser() {
    console.log("getUser");
    const user = fetch("https://api.uomg.com/api/rand.qinghua")
    console.log("getUser已获取到用户数据user", user);
    return user;
  }

  function m1() {
    console.log("m1");
    return getUser();
  }

  function m2() {
    console.log("m2");
    return m1();
  }

  function m3() {
    console.log("m3");
    return m2();
  }

  function main() {
    console.log("main");
    const user = m3();
    console.log("feng", user);
  }

  function run(fn) {
    const originFetch = window.fetch
    const cache = [];
    let i = 0;
    window.fetch = (...args) => {
      console.log(i, args)
      if (cache[i]) { // 如果有缓存，表示已经发请求了，
        const cacheData = cache[i];

        if (cacheData.status === FULFILLED) return cacheData.data;
        if (cacheData.status === REJECTED) return cacheData.err

      } else { // 没有缓存，发送请求
        const result = {
          status: PENDING,
          data: null,
          err: null
        }
        cache[i] = result
        i++
        // 直接抛出 Promise, 并在其执行完毕之后记录其状态
        throw originFetch(...args)
          .then(res => res.json())
          .then(res => {
            result.status = FULFILLED
            result.data = res
          })
          .catch(err => {
            result.status = REJECTED
            result.err = err
          })
      }
    }

    function execute() {
      try {
        i = 0
        fn()
      } catch(err) {
        if (err instanceof Promise) { // 如果错误类型是 Promise，表示是 fetch 抛出的
          err.then(execute, execute)
        } else {
          throw err
        }
      }
    }

    execute()
  }

  run(main);

  return <div style={{padding: 20}}>
    <h1>消除异步传染性</h1>
  </div>
}

export default PromiseView
import PromiseView from "@/pages/js/PromiseView";
import NumberToChinese from "@/pages/js/NumberToChinese";
import Language from "@/pages/js/Language";
import AbortControllerView from "@/pages/js/AbortController";

const router = [
  {
    path: 'promise',
    element: <PromiseView />
  },
  {
    path: 'numberToChinese',
    element: <NumberToChinese />
  },
  {
    path: 'language',
    element: <Language />
  },
  {
    path: 'abort',
    element: <AbortControllerView />
  },
]

export default router
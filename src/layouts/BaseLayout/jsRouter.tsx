import PromiseView from "@/pages/js/PromiseView";
import NumberToChinese from "@/pages/js/NumberToChinese";

const router = [
  {
    path: 'promise',
    element: <PromiseView />
  },
  {
    path: 'numberToChinese',
    element: <NumberToChinese />
  },
]

export default router
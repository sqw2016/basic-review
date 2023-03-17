import MixBlendMode from "@/pages/css/MixBlendMode";
import BackgroundBlendMode from "@/pages/css/BackgroundBlendMode";
import BackgroundClip from "@/pages/css/BackgroundClip";
import Filter from "@/pages/css/Filter";
import MixMode from "@/pages/css/MixMode";
import Transform from "@/pages/css/Transform";

const router = [
  {
    path: 'mix-blend-mode',
    element: <MixBlendMode />
  },
  {
    path: 'background-blend-mode',
    element: <BackgroundBlendMode />
  },
  {
    path: 'background-clip',
    element: <BackgroundClip />
  },
  {
    path: 'filter',
    element: <Filter />
  },
  {
    path: 'transform',
    element: <Transform />
  },
  {
    path: 'mix-mode',
    element: <MixMode />
  }
]

export default router
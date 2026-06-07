import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { MyWork } from "./components/MyWork";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Brochures from "./../pages/Brochures";
import Carousels from "./../pages/Carousels";
import Ebooks from "./../pages/Ebooks";
import Images from "./../pages/Images";
import Infographics from "./../pages/Infographics";
import Logos from "./../pages/Logo";
import MetaAds from "./../pages/MetaAds";
import Reels from "./../pages/Reels";

import InformationalImages from "./../pages/InformationalImages";
import PromotionalImages from "./../pages/PromotionalImages";
import SpecialDaysImages from "./../pages/SpecialDaysImages";
import ThematicImages from "./../pages/ThematicImages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "my-work", Component: MyWork },

      { path: "my-work/brochures", Component: Brochures },
      { path: "my-work/carousels", Component: Carousels },
      { path: "my-work/ebooks", Component: Ebooks },
      { path: "my-work/images", Component: Images },
      { path: "my-work/images/informational", Component: InformationalImages },
      { path: "my-work/images/promotional", Component: PromotionalImages },
      { path: "my-work/images/special-day", Component: SpecialDaysImages },
      { path: "my-work/images/thematic", Component: ThematicImages },
      { path: "my-work/infographics", Component: Infographics },
      { path: "my-work/logos", Component: Logos },
      { path: "my-work/meta-ads", Component: MetaAds },
      { path: "my-work/reels", Component: Reels },

      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);

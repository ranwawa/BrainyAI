import styleText from "data-text:~base.scss"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"

import CInPanelChallenge from "~component/xframe/challenge/c-in-panel-challenge"
import { SiteName } from "~porvider/sidepanel/SidePanelProvider"

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://*.perplexity.ai/*"],
  all_frames: true
}

export default function Perplexity() {
  return (
    <div>
      <CInPanelChallenge siteName={SiteName.PERPLEXITY} />
    </div>
  )
}

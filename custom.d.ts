declare module "*.svg" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGSVGElement>>;
    export default ReactComponent;
  }
  
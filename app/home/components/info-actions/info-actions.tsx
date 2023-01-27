// Internal Dependencies
import { InfoActionsProps } from "./info-actions.types";

import { Actions } from "./actions";
import { Info } from "./info";

const InfoActions = ({ movieTitle }: InfoActionsProps) => (
  // <section className="absolute left-10 bottom-[200px] flex flex-col gap-2">
  <section className="flex flex-col sm:justify-start md:justify-end gap-2 mb-[200px]">
    <Info title={movieTitle} />
    <Actions />
  </section>
);

export default InfoActions;

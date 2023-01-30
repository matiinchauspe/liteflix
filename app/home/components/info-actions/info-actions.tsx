// Internal Dependencies
import { InfoActionsProps } from "./info-actions.types";

import { Actions } from "./actions";
import { Info } from "./info";

const InfoActions = ({ movieTitle }: InfoActionsProps) => (
  <section className="flex flex-1 flex-col self-center md:self-auto justify-start md:justify-end gap-2 mt-[90px] md:mt-0 mb-[200px] px-10 md:px-0">
    <Info title={movieTitle} />
    <Actions />
  </section>
);

export default InfoActions;

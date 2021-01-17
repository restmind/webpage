import React, { useState } from "react";
import { Wrapper, FilterMobile, FilterDesktop  } from "./FilterSection.styled.js";
import { Location } from "../../discover/components/RecomendedTours.styled";
import Filters from "./Filters";


function FilterSection() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Wrapper>
      <FilterDesktop>
        <Location style={{ margin: "35px auto" }}>
            <img src="images\icon-settings.svg" alt="5 stars" />
            <h6>Filters</h6>
        </Location>
        <Filters></Filters>
      </FilterDesktop>
      <FilterMobile onClick={handleClick}>
        <Location style={{ margin: "15px auto" }}>
            <img src="images\icon-settings.svg" alt="5 stars" />
            <h6>Filters</h6>
        </Location>
      </FilterMobile>
      {click? <Filters></Filters> : null}
    </Wrapper>
  );
}

export default FilterSection;

import "./category.css"

export default function Category (props) {
  return (
    <div>
      <div align="center">
          <button type="button" class="bt " onClick={props.reset}>
            {" "}
            ALL
          </button>
          <button type="button" class="bt margin-left" onClick={props.pizza}>
            BREAKFAST
          </button>
          <button type="button" class="bt margin-left" onClick={props.burger}>
             LUNCH
          </button>

          <button type="button" class="bt margin-left" onClick={props.soup}>
             SWEET
          </button>
          <button type="button" class="bt margin-left" onClick={props.tea}>
             DRINK
          </button>
          
      </div>
    </div>
  );
};


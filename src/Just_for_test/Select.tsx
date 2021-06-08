import React from "react";
import styles from "./Select.module.css";

type ItemsType = {
  title: string;
  value: any;
};

type PropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemsType[];
};

const Selector = (props: PropsType) => {
  const [active, setActive] = React.useState(false);
  const [hoveredElement, setHoveredElement] = React.useState(props.value);

  const selectedItems = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElement);

  const showToggle = () => setActive(!active);

  const onItemClick = (value: any) => {
    props.onChange(value);
    showToggle();
  };

  return (
    <>
      {/* <select>
        <option value="">Minsk</option>
        <option value="">Moscow</option>
        <option value="">Kiev</option>
      </select> */}

      <div className={styles.select}>
        <span className={styles.main} onClick={showToggle}>
          {selectedItems && selectedItems.title}
        </span>
        {active && (
          <div className={styles.items}>
            {props.items.map((i) => (
              <div className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                onClick={() => {onItemClick(i.value)}}
                key={i.value}
                onMouseEnter={() => {setHoveredElement(i.value)}}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Selector;

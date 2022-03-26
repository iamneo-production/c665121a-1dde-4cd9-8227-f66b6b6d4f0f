import { useState } from "react";
import '../styles/Rating.css'
import { FaStar } from "react-icons/fa";
import { Formik } from "formik";
import { Form } from "formik";
import TextBar from "./TextBar";



const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Rating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <><Formik
      initialValues={{
        rating: '',
        experience: '',
      }}
      onSubmit={values => {
        console.log(values);
        console.log(currentValue);
      } }
    >
      {formik => (<div style={styles.container}>
        <Form>
        <h2> RATING </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
              name="rating" 
              value={currentValue}

                key={index}
                size={30}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }} />
            );
          })}
        </div>
        

          <TextBar id="experience" label="What's your experience" name="experience" type="text" />

<button className="btn btn-success mt-3"style={{marginLeft:40}} type="submit">SUBMIT</button>
        </Form>

      </div>)}</Formik></>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  TextBar: {
    border: "8px solid #a9a9a9",
    borderRadius: 5,
    padding: 15,
    margin: "20px 0",
    minHeight: 500,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },


};




export default Rating;
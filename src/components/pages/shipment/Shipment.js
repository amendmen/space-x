import React, { useState, useEffect } from 'react'
import FormControl from '../../formControl/FormControl'
import './Shipment.css'
import { connect } from 'react-redux';
import * as actionCreators from "../../../store/actions/shipment";
import { useParams } from "react-router-dom";

const Shipment = ({current, setCurrent }) => {  
    const [value, setValue] = useState(current.boxes || '');  

    let { id } = useParams();

    useEffect(() => {       
        setCurrent(id)       
    }, [id]);

    useEffect(() => {       
        setValue(current.boxes || '')     
    }, [current]);

    const summ = value ? value
                .split(',')
                .reduce((acc, curr) => {
                        acc += +curr 
                    return acc
                    }, 0) : 0

    const result = (summ/10 % 1) ? Math.floor(summ/10) + 1 : summ/10

    const handleInput = (e) => {
        let array = e.replace(/[^0-9\.,]/g, '').split(',')
     
        if(array[0] && array[0] == '.') {
            array.splice(0, 1)
        }

        if(array && array.length) {
            array = array.map(num => {
                let tempArr = num.split('.')
                if(tempArr.length > 1 ) {
                    num = tempArr[0] + '.' + tempArr[1]
                }
                return num 
            })
        }

        setValue(array.join(','))
    }

    return (
        <div className="shipment">
            <div className="shipment__wrapper">
                <div className="shipment__name">{current.name} </div>
                <div className="shipment__email">{current.email}</div>
                <FormControl value={value} input={handleInput}>Cargo boxes</FormControl>
                <div className="shipment__result">Number of required cargo bays</div>
                <div className="shipment__value">{result}</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      current: state.current,   
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrent: (id) => dispatch(actionCreators.setCurrent(id)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Shipment)
import React from 'react'; 
import PropTypes from 'prop-types';

const Rate = ({count, rating, color, onRating}) => {

    const startRating = useMemo (() => {
        return Array (count)
        .fill(0)
        .map((_, i) => i + 1)
    })
return (    
<div>

   
</div> 

)};

Rate.propTypes = {
    count: Proptypes.number,
    raiting: Proptypes.number,
    onRating: Proptypes.number,
    onChange: Proptypes.number,
    color:{
        filled: ProtoTypes.string,
        unfilled: ProtoTypes.string
    } 
};

Rate.defaultProps = {
    count: 5, 
    raiting: 0,
    color: {
        filled: "#FFD74C",
        unfilled: "#737373"

    }
}

export default Rate;
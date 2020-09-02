export const getReviewColor = value => {
    value = +value;
    
    if (value > 3.5){
        return 'Green';
    } else if (value > 2.5) {
        return 'Yellow'
    }else{
        return 'Red'
    }

}
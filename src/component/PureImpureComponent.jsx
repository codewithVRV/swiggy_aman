

export const Pure = (props) => {
    let {num} = props; 
    return (
        <div> {num} offers</div>
    )
}
let x = 1;
export const ImPure = (props) => {
    let {num} = props;
    x = num + x;
    return (
        <div> {x} offer letters</div>
    )
}


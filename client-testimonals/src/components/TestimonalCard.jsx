const TestimonalCard=({customer})=>{

    const cardstyle={
        padding: '20px',
        margin: '10px',
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        border: '5px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    };

    const namestyle={
        fontSize: '30px',
        color: 'black',
        fontWeight: 'bold'
    };

    const textstyle={
        fontSize: '20px',
        color: 'black'
    };

    return (
        <div style={cardstyle}>
            <div style={namestyle}>Customer Name: {customer.name}</div>
            <div style={textstyle}>Review: {customer.text}</div>
        </div>
    );
};

export default TestimonalCard;
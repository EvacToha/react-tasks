import { styled } from "@mui/system";
import { Button } from "@mui/material";


const CounterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    width: '200px',
    border: '8px solid black',
    borderRadius: '30px',
    padding: '10px',
});

const CounterDisplay = styled('div')({
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
});

const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
});

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #000000 30%, #666666 90%)',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: '30px',
    width: '20px',
    padding: '0 10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});
export  {MyButton, CounterDisplay, CounterContainer, ButtonsContainer};
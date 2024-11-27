import { styled } from "@mui/system";
import { Button } from "@mui/material";


const CounterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
});

const CounterDisplay = styled('div')({
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
});

const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
});

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});
export  {MyButton, CounterDisplay, CounterContainer, ButtonsContainer};
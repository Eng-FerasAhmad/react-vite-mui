import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import { ReactElement } from 'react';
import MuiSection from 'components/mui-section/MuiSection';
import TailwindSection from 'components/tailwind-section/TailwindSection';
import { muiTheme } from 'src/theme';

export default function App(): ReactElement {
    return (
        <ThemeProvider theme={muiTheme}>
            <Container>
                <MuiSection />
                <TailwindSection />
            </Container>
        </ThemeProvider>
    );
}

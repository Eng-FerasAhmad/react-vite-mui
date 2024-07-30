import {
    Box,
    Button,
    Grid,
    Paper,
    Stack,
    styled,
    Typography,
} from '@mui/material';
import { ReactElement } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledDiv = styled('div')(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    margin: '20px auto',
}));

export default function MuiSection(): ReactElement {
    return (
        <>
            <h1>MUI</h1>

            <Typography variant="h6">Das ist Stack</Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ p: 2, m: 'auto', width: 'fit-content' }}
            >
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <Box
                component="section"
                sx={{ p: 2, border: '1px dashed grey', m: '16px' }}
            >
                <Typography variant="h6">Das ist Box</Typography>
                This Box renders as an HTML section element.
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant="h6">Das ist Grid</Typography>
                    </Item>
                </Grid>

                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>xs=5</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
            </Grid>

            <StyledDiv>StyledDiv</StyledDiv>
            <div className={'card'}>Nur CSS div</div>
        </>
    );
}

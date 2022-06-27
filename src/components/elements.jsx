import { Box, Typography, Button } from "@mui/material";

export const ElementOne = () => {
    const style = {
        borderRadius: "15px 15px 0px 0px"
    }
    return (

        <Box sx={{ m: 1, width: "250px",height:"300px", borderRadius: 3, boxShadow: 5 ,background:"#2d7782"}}>

            <img style={style} src="https://sneakernews.com/wp-content/uploads/2019/01/nike-air-max-720-northern-lights-ao2924-001-4.jpg" alt="" width="100%" />
            <Box sx={{ textAlign: "left", pl: 3 }}>
                <Typography sx={{ fontWeight: "bolder" }}>Nike Air Max 720</Typography>
                <Typography sx={{ fontWeight: "bolder" }}>Price:- 1000/-</Typography>
            </Box>
            <Box >
                <Button sx={{ color: "white", background: "black", m: 1, borderRadius: 4, width: "40%" }}>Buy</Button>
                <Button sx={{ color: "white", background: "black", m: 1, borderRadius: 4, width: "40%" }}>Cart</Button>
            </Box>

        </Box>
    )
}

export const ElementTwo = () => {
    const style = {
        borderRadius: "15px 15px 0px 0px"
    }
    return (
        <Box>
            <Box sx={{ m: 1, width: "250px",height:"300px", borderRadius: 3, boxShadow: 5,background:"black",color:"white" }}>

                <img style={style} src="https://cdn.dribbble.com/users/889542/screenshots/6814938/adidas_nmd_dribbble_4x.jpg?compress=1&resize=400x300&vertical=top" alt="" width="100%" />
                <Box sx={{ textAlign: "left", pl: 3 }}>
                    <Typography sx={{ fontWeight: "bolder" }}>Nike Air Max 720</Typography>
                    <Typography sx={{ fontWeight: "bolder" }}>Price:- 1000/-</Typography>
                </Box>
                <Box >
                    <Button sx={{ color: "black", background: "orange", m: 1, borderRadius: 4, width: "40%" }}>Buy</Button>
                    <Button sx={{ color: "black", background: "orange", m: 1, borderRadius: 4, width: "40%" }}>Cart</Button>
                </Box>

            </Box>
        </Box>
    )
}

export const ElementThree = () => {
    const style = {
        borderRadius: "15px 15px 0px 0px"
    }
    return (
        <Box>
            <Box sx={{ m: 1, width: "250px",height:"300px", borderRadius: 3, boxShadow: 5,background:"black",color:"white" }}>

                <img style={style} src="https://inteng-storage.s3.amazonaws.com/images/uploads/sizes/Futurecraft_resize_md.jpg" alt="" width="100%" />
                <Box sx={{ textAlign: "left", pl: 3 }}>
                    <Typography sx={{ fontWeight: "bolder" }}>Nike Air Max 720</Typography>
                    <Typography sx={{ fontWeight: "bolder" }}>Price:- 1000/-</Typography>
                </Box>
                <Box >
                    <Button sx={{ color: "white", background: "grey", m: 1, borderRadius: 4, width: "40%" }}>Buy</Button>
                    <Button sx={{ color: "white", background: "grey", m: 1, borderRadius: 4, width: "40%" }}>Cart</Button>
                </Box>

            </Box>
        </Box>
    )
}



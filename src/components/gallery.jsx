import { ImageList, ImageListItem } from '@mui/material';

const Gallery = ({ artists }) => {
    console.log(artists[0]);
    return (
        <div>
            <ImageList sx={{ width: "100%", height: "auto" }} cols={4} rowHeight={164}>
                {artists.map((artist, index) => (
                    <ImageListItem key={index}>
                        <img
                            srcSet={`./images/${artist}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`./images/${artist}?w=164&h=164&fit=crop&auto=format`}
                            alt=""
                            loading="lazy"
                            style={{ height:"100%", width:"auto" }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </div>

    );
};


export default Gallery;
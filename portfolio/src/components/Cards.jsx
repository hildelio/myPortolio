import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../css/cards.css'

class Cards extends Component {
  render() {
    const { title, image, description, githubLink, projectLink } = this.props.info;
    return (
      <Card className="app-projectsCard" sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="images" height="200" image={ image } />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <a href={ githubLink } target="_blank" rel="noreferrer">
            <GitHubIcon size="small" />
          </a>
          {
            projectLink &&  <a  href={ projectLink } target="_blank" rel="noreferrer">
              <OpenInNewIcon size="small" aria_label='deploy'/>
              </a>
          }
        </CardActions>
      </Card>
    );
  }
}

export default Cards;

Card.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    projectLink: PropTypes.string,
  }),
};

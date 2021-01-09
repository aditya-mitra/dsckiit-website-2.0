import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import type { IBlogPost } from '@/lib/staticData/blogPosts';

const useStyles = makeStyles((theme) => ({
	blogsContainer: {
		paddingTop: theme.spacing(6),
		paddingLeft: 80,
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: '100%',
	},
	media: {
		height: 400,
	},
	cardActions: {
		display: 'flex',
		margin: '0 10px',
		justifyContent: 'space-between',
	},
	author: {
		display: 'flex',
	},
	gridContainer: {
		display: 'flex',
	},
}));
export default function Blogs({ blogPosts }: { blogPosts: Array<IBlogPost> }) {
	const classes = useStyles();
	const posts = blogPosts.map((post) => (
		<div className="App">
			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Grid container spacing={3} className={classes.gridContainer}>
					<Grid item xs={12} sm={10} md={11}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={post.image}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{post.title}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										{post.categories}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Box>
										<Typography variant="subtitle2" component="p">
											{post.author}
										</Typography>
										<Typography
											variant="subtitle2"
											color="textSecondary"
											component="p">
											DD/MM/YYYY
										</Typography>
									</Box>
								</Box>
								<Link href={post.link}>
									<Button color="primary">Learn More</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	));
	return <>{posts}</>;
}
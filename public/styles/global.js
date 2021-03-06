import { createGlobalStyles } from 'goober/global';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyles`
	html,
	body {
		margin: 1;
		padding: 0;
		display: flex;
		flex: 1;
		flex-direction: column;
		flex-grow: 1;
		height: 100%;
		width: 100%;
		font: 1rem system-ui,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
		color: ${theme.colors.white};
		background-color: ${theme.colors['gray-50']};
		position: relative;
		overflow: 'hidden'
	}

	* {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	a:link,
	a:visited {
		text-decoration: none;
	}

	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

import React from 'react';
import { Link } from '@reach/router';

const NavBar = (props) => {
return (
<div>
<Link to = "/people">People</Link>
<Link to = "/plantes">Planets</Link>
</div>
);
}

export default NavBar;
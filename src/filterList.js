import React from "react";
import { Link } from "react-router-dom";
export default function FilterList() {
  return <ul>
    <li><Link to="/all">all</Link></li>
    <li><Link to="/active">active</Link></li>
    <li><Link to="/finished">finished</Link></li>
  </ul>;
}

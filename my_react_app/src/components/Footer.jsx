export default function Footer(props)
{
  return (
     <footer>
     <p>© {props.year[2]} {props.company.name} All rights reserved.</p>
     </footer>
   );
}
interface Props {
  title: string;
  image: string;
  link?: string;
}

export default function WorkCard({
 title,
 image,
 link
}: Props) {
 return (
   <div>
     <img src={image} alt={title} />
     <h3>{title}</h3>

     {link && (
       <a
         href={link}
         target="_blank"
       >
         View
       </a>
     )}
   </div>
 );
}
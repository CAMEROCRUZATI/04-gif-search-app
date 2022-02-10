
import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GiftSearchApp = () => {
 
 const [categories, setCategories] = useState(['One Piece']);

 
 
  return (
    <div>

        <h2>GifSearcApp</h2>
        <hr/>
        <AddCategory setCategories={ setCategories }/>
        <ol>
          {
            categories.map(( category) =>(
              <GifGrid 
                 key={ category}
                 category={ category }
              />

            ))
          }
        </ol>
    </div>
  );
};

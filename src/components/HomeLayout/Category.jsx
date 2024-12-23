import axios from "axios";
import { useEffect, useState } from "react";

const Category = () => {
  const [datas, setDatas] = useState([]);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/category").then((data) => {
      setDatas(data.data);
    });
  }, [setCategorys]);

  // useEffect(() => {
  // const filter = datas.find((data) => data.language !== categorys);
  // console.log(filter.language);
  //   setCategorys([...categorys, allCategory.language]);
  // }, [setCategorys]);
  console.log("Datas", datas);
  console.log("Category", categorys);
  return (
    <div>
      {datas?.map((category) => (
        <li>{category.language}</li>
      ))}
    </div>
  );
};

export default Category;

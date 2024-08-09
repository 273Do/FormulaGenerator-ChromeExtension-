import { updatePage } from "@/redux/pageSlice";
import { RootState } from "@/redux/store";
import { Copyright, SquareFunction, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  // return <div className="bg-blue-400 w-full h-[50px]">Footer</div>;
  const page = useSelector((state: RootState) => state.page.value);
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-0 font-inter z-50 w-full h-[60px] border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 my-1 h-full grid grid-cols-3 gap-2 text-[10px]">
        <div
          className={`${
            page == "Generate" ? "text-green-400" : " text-muted-foreground"
          } justify-start flex flex-col items-center transition`}
          onClick={() => dispatch(updatePage("Generate"))}
        >
          <SquareFunction />
          <p>Generate</p>
        </div>
        <div
          className={`${
            page == "Favorite" ? "text-green-400" : " text-muted-foreground"
          } justify-start flex flex-col items-center transition`}
          onClick={() => dispatch(updatePage("Favorite"))}
        >
          <Star />
          <p>Favorite</p>
        </div>
        <div
          className={`${
            page == "Copyright" ? "text-green-400" : " text-muted-foreground"
          } justify-start flex flex-col items-center transition`}
          onClick={() => dispatch(updatePage("Copyright"))}
        >
          <Copyright />
          <p>Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

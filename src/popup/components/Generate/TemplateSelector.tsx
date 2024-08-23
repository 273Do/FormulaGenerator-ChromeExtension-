import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import useTemplate from "@/hooks/useTemplate";
import { setting_bucket } from "@/utils/storage";

export function TemplateSelector() {
  const { data, templateName, saveTemplateName } = useTemplate();
  console.log(data);

  useEffect(() => {
    (async () => {
      const t_value = await setting_bucket.get();
      if (t_value.template) {
        saveTemplateName(t_value.template);
      }
    })();
  }, []);

  const template_list = [
    "演算子",
    "括弧",
    "分数",
    "論理",
    "集合",
    "順序_組合わせ",
    "総和_総乗",
    "根号_指数_対数",
    "複素数",
    "三角関数",
    "極限",
    "微分",
    "積分",
    "ベクトル",
    "行列",
    "空白",
    "表示形式",
    "フォント_サイズ",
    "ギリシャ文字（大文字）",
    "ギリシャ文字（小文字）",
    "特殊文字",
    "アクセント",
  ];

  return (
    <div className="w-full h-5 flex justify-between items-center">
      <p className=" text-xs tracking-wide text-muted-foreground">
        {templateName}
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ChevronDown className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all text-muted-foreground cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-48 overflow-y-scroll font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {template_list.map((template) => (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => saveTemplateName(template)}
              key={template}
            >
              {template}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

{
  /* <SelectLabel>
            <div className="w-full h-5 flex justify-between items-center">
              <p className=" text-xs tracking-wide text-muted-foreground">
                Order/Combination
              </p>
              <ChevronDown className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all text-muted-foreground cursor-pointer" />
            </div>
          </SelectLabel> */
}

//className="w-1/3 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

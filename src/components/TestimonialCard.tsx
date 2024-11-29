import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { isValidColor } from "./IsValidColor";
import twitter from "@/assets/images/twitter_logo.png";
import linkedIn from "@/assets/images/linkedIn_logo.png";
import product from "@/assets/images/ProductHunt_logo.png";
import { Testimonial } from "@/interface";

interface TestimonialCardProps {
  index: number;
  testimonial: Testimonial;
  cardBackgroundColor?: string;
  textColor?: string;
  isDarkTheme?: boolean;
  cardBorderRad?: string;
  starColor?: string;
  tagColor?: string;
  tagTextColor?: string;
  cardHeight?: string;
  cardWidth?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  index,
  testimonial,
  cardBackgroundColor = "",
  textColor = "",
  isDarkTheme = false,
  cardBorderRad = "",
  starColor = "#71D4FE",
  tagColor = "#C2F19D",
  tagTextColor = "black",
  cardHeight,
  cardWidth,
}) => {
  return (
    <Card
      key={`${testimonial.id}-${index}`}
      className={`border border-gray-200 ${
        !isValidColor(cardBackgroundColor) && isDarkTheme
          ? "bg-gray-800"
          : !isValidColor(cardBackgroundColor) && !isDarkTheme
          ? "bg-white"
          : ""
      } ${
        !isValidColor(textColor) && isDarkTheme
          ? "text-white"
          : !isValidColor(textColor) && !isDarkTheme
          ? "text-black"
          : ""
      } md:w-80 w-56 min-w-[270px] h-full`}
      style={{
        backgroundColor: isValidColor(cardBackgroundColor)
          ? `#${cardBackgroundColor}`
          : undefined,
        color: isValidColor(textColor) ? `#${textColor}` : undefined,
        borderRadius: cardBorderRad,
        height: cardHeight === "fit" ? "fit-content" : undefined,
        minWidth: cardWidth ? `${cardWidth}px` : undefined,
      }}
    >
      <CardHeader className="flex flex-row justify-between items-start py-0 pt-4 pb-2">
        <div className="flex flex-row items-center gap-2">
          {testimonial.image && (
            <div className="w-6 h-6 md:w-10 md:h-10 overflow-hidden rounded-full">
              <img
                src={testimonial.image}
                alt={`${testimonial.firstName}'s avatar`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className={`text-sm flex flex-col`}>
            <strong>{testimonial.firstName}</strong>
            {testimonial.jobTitle && (
              <span className="text-opacity-90">{testimonial.jobTitle}</span>
            )}
          </div>
        </div>
        {testimonial.reviewType === 2 && (
          <div className="w-7 h-7 overflow-hidden rounded-full">
            <img
              src={
                testimonial.importedReviewType === 0
                  ? twitter
                  : testimonial.importedReviewType === 1
                  ? linkedIn
                  : product
              }
              alt="imported"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-2 px-4 flex flex-col gap-2 justify-center">
        {testimonial.stars && (
          <div className="flex">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <Star
                key={i}
                style={{
                  fill: isValidColor(starColor) ? `#${starColor}` : "#71D4FE",
                }}
                color="none"
              />
            ))}
          </div>
        )}
        {testimonial.review && <p>"{testimonial.review}"</p>}
        {testimonial.importedImage && (
          <img
            src={testimonial.importedImage}
            alt="Image"
            className="w-[70%] md:w-full h-auto mt-2 object-cover"
          />
        )}
        {testimonial.importedVideo && (
          <video
            controls
            src={testimonial.importedVideo}
            className="w-full h-auto pt-6 object-cover"
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between p-0 py-2 pb-4 px-4">
        {testimonial.tags && testimonial.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {testimonial.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2 py-1 text-xs font-medium"
                style={{
                  backgroundColor: isValidColor(tagColor)
                    ? `#${tagColor}`
                    : "#C2F19D",
                  color: isValidColor(tagTextColor) ? tagTextColor : "black",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;

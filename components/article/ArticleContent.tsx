interface ArticleContentProps {
  description: string;
}

export default function ArticleContent({
  description,
}: ArticleContentProps) {
  return (
    <article className="prose prose-lg max-w-none">

      <p className="text-xl leading-9 text-gray-700">
        {description}
      </p>

      <h2>Understanding the Bigger Picture</h2>

      <p>
        Financial decisions affect every aspect of daily life, from saving
        money to investing for the future. Understanding economic trends
        helps individuals make smarter choices and reduce financial risk.
      </p>

      <p>
        Whether you are a beginner investor or an experienced professional,
        staying informed about markets, inflation and government policy is
        essential for long term financial success.
      </p>

      <h2>Why It Matters</h2>

      <p>
        Reliable financial information allows people to build wealth,
        protect their savings and prepare for economic uncertainty.
      </p>

      <blockquote>
        Smart financial decisions begin with reliable information.
      </blockquote>

      <h2>Conclusion</h2>

      <p>
        Continue learning, stay informed and always make investment
        decisions based on research instead of emotion.
      </p>

    </article>
  );
}
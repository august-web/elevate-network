/** The "@elevatenetworkhq · Follow Along" ticker strip. */
export function FollowMarquee() {
  return (
    <div className="marquee follow-marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>
          @elevatenetworkhq <i>✳</i> Follow Along <i>✳</i> @elevatenetworkhq{" "}
          <i>✳</i> Follow Along <i>✳</i>
        </span>
        <span>
          @elevatenetworkhq <i>✳</i> Follow Along <i>✳</i> @elevatenetworkhq{" "}
          <i>✳</i> Follow Along <i>✳</i>
        </span>
      </div>
    </div>
  );
}

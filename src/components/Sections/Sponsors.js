import React from "react";
import axios from "axios";

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiers: [],
    };
  }

  getSponsorTiers = async () => {
    const response = await axios.get(
      "https://opencollective.com/wireflow/members/all.json",
    );
    const cutoffDate = new Date('2024-09-24');
    const backers = response.data.filter(
      (member) =>
        member.role === "BACKER" &&
        new Date(member.lastTransactionAt) > cutoffDate,
    );
    const tiers = {};
    backers.forEach((backer) => {
      if (backer.tier) {
        if (!tiers[backer.tier]) {
          tiers[backer.tier] = [];
        }
        tiers[backer.tier].push({
          id: backer.id,
          name: backer.name,
          image: backer.image,
          website: backer.website,
          nofollow: String(backer.tier).toLowerCase().includes("nofollow"),
        });
      }
    });
    console.log({ tiers });
    return tiers;
  };

  async componentDidMount() {
    const tiers = await this.getSponsorTiers();
    this.setState({ tiers });
  }

  render() {
    const { tiers } = this.state;
    console.log(tiers);

    return (
      <div id="sectionSponsors" class="sponsors">
        <h1 key="sponsors-section">Sponsors</h1>
        {Object.keys(tiers).map(
          (tier) =>
            tiers[tier].length > 0 && (
              <div class="row" key={tier}>
                <h2 key={tier}>{tier}</h2>
                {tiers[tier].map((backer) => (
                  <div className="card" key={backer.id}>
                    <p>
                      <a
                        href={backer.website}
                        target="_blank"
                        rel={backer.nofollow ? "nofollow" : undefined}
                      >
                        {backer.image && (
                          <img
                            src={backer.image}
                            alt={backer.name}
                            style={{ width: "100px" }}
                          />
                        )}
                        {!backer.image && (
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+" />
                        )}
                      </a>
                    </p>
                    <p>
                      <a
                        href={backer.website}
                        target="_blank"
                        rel={backer.nofollow ? "nofollow" : undefined}
                      >
                        {backer.name}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            ),
        )}
        <div className="row cta-tiers">
          <h2>Support us!</h2>
          <p><a target="_blank" href="https://opencollective.com/wireflow/contribute/backer-silver-2732/checkout">Bronze</a></p>
          <p><a target="_blank" href="https://opencollective.com/wireflow/contribute/sponsor-2733/checkout">SilveR</a></p>
          <p><a target="_blank" href="https://opencollective.com/wireflow/contribute/backer-gold-2741/checkout">Gold</a></p>
          <p><a target="_blank" href="https://opencollective.com/wireflow/contribute/diamond-tier-website-github-79732/checkout">Diamond</a></p>
          <p><a target="_blank" href="https://opencollective.com/wireflow/contribute/annual-diamond-tier-18-discount-79733/checkout">Annual</a></p>
        </div>
      </div>
    );
  }
}

export default Sponsors;

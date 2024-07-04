import Header from '../../components/header/Header';
import Candles from '../../components/Candles';
import GridBoxHeader from '../../components/dashboard/GridBoxHeader';
import GridBoxAnalytics from '../../components/dashboard/GridBoxAnalytics';
import GridBoxItemWrapper from '../../components/dashboard/GridBoxItemWrapper';
const Dashboard = () => {
  const weekReport = [
    {
      letter: 'M',
    },
    {
      letter: 'T',
    },
    {
      letter: 'W',
    },
    {
      letter: 'T',
    },
    {
      letter: 'F',
    },
    {
      letter: 'S',
    },
    {
      letter: 'S',
    },
  ];
  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-4 text-white text-sm">
        {/* First row */}
        <div className="bg-primary05 px-4 py-6 text-center rounded-md">
          {/* GRID BOX 1 */}
          <div className="relative flex flex-col gap-4 text-start  ">
            <div>
              <h4 className="text-sm ">Congratulations Katie 🎉</h4>
              <p className="text-xs">Best Seller of the month</p>
            </div>

            <div>
              <h3 className="text-xs text-green-400">$42.8k</h3>
              <p className="text-xs">70% of target 🐱‍🏍</p>
            </div>
            <button className="text-white bg-candlePurple text-xs py-2 px-4 w-fit rounded-md ">
              View Sales
            </button>
            <img
              src="src/assets/images/pngegg.png"
              alt=""
              className="w-28 absolute -bottom-4 right-0 rotate-12"
            />
          </div>
        </div>
        <div className="flex bg-primary05 py-6 rounded-md text-center col-span-3">
          <GridBoxItemWrapper>
            <GridBoxHeader startContent="New Visitors" endContent="Last Week" />
            <div className="flex justify-between">
              <GridBoxAnalytics percentage="23%" hikeOrDown="8.5%" />
              <div className="flex gap-1 justify-center items-center">
                {weekReport.map((l, i) => {
                  return <Candles key={i} dayLetter={l.letter} />;
                })}
              </div>
            </div>
          </GridBoxItemWrapper>
          <div className="flex-1 px-4">
            <GridBoxHeader startContent="Activity" endContent="Last Week" />
            <GridBoxAnalytics percentage="23%" hikeOrDown="8.5%" />
          </div>
        </div>

        {/* Second row - takes more height */}
        {/* Third row */}
      </div>
    </>
  );
};

export default Dashboard;

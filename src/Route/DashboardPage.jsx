import { NavLink, Outlet } from "react-router-dom";

const DashboardPage = () => {
  const list = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Settings",
      path: "settings",
    },
    {
      name: "Support",
      path: "support",
    },
<<<<<<< HEAD
    {
      name: "createProduct",
      path: "CraeteProduct  ",
    },

=======

    {
      name: "Create Product",
      path: "create-product",
    },
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
  ];
  return (
    <div>
      {/* <h1 className="text-center text-4xl">THis is dashboard header</h1> */}
      <nav className="py-5 bg-slate-200">
        <ul className="flex gap-3">
          {list.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* <ul className="flex gap-3">
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="settings">
            <li>Settings</li>
          </Link>
          <Link to="support">
            <li>support</li>
          </Link>
        </ul> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardPage;

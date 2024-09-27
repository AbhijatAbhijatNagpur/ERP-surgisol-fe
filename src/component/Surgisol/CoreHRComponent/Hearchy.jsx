import React, { useState } from "react";

const HierarchyMember = ({ name, role, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newRole, setNewRole] = useState(role);

  const handleSave = () => {
    onUpdate(newName, newRole);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center">
      {isEditing ? (
        <>
          <input
            className="border p-1 mb-2 text-center"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            className="border p-1 mb-2 text-center"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <img
            className="w-16 h-16 rounded-full mb-2"
            src="https://via.placeholder.com/100"
            alt={role}
          />
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-300 text-black px-3 py-1 rounded mt-2"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

const Hearchy = () => {
  // Main hierarchy structure
  const [head, setHead] = useState({
    name: "Lucy Cai",
    role: "Head of Design",
  });

  const [teamMembers, setTeamMembers] = useState([
    { name: "Lucy Cai", role: "Design Team" },
    { name: "Lucy Cai", role: "Design Team" },
    { name: "Lucy Cai", role: "Design Team" },
  ]);

  const updateHead = (name, role) => {
    setHead({ name, role });
  };

  const updateTeamMember = (index, name, role) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { name, role };
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="flex shadow-md rounded-lg bg-[#F7F7F7] h-[350px] p-2 justify-center">
      <div className="text-center">
        {/* Head of Design */}
        <div className="mb-3 m-auto bg-[#D9D9D9] text-sm w-[200px]">
          <HierarchyMember
            name={head.name}
            role={head.role}
            onUpdate={updateHead}
          />
        </div>

        {/* Design Team */}
        <div className="flex justify-center">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="text-center bg-[#D9D9D9] px-4 w-32 text-sm mx-2"
            >
              <HierarchyMember
                name={member.name}
                role={member.role}
                onUpdate={(name, role) => updateTeamMember(idx, name, role)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hearchy;

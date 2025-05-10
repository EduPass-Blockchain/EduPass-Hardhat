// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const UserModule = buildModule("UserModule", (m) => {
  const roleManager = m.contract("RoleManagerContract", []);
  const userManager = m.contract("UserManagerContract", [roleManager]);
  const certificateManager = m.contract("CertificateContract", [roleManager, userManager])

  return { roleManager, userManager, certificateManager };
});

export default UserModule;

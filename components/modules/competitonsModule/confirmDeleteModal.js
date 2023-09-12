import { Button, Col, Input, Modal, Row, Typography } from "antd";
import { useState } from "react";

const ConfirmDeleteModal = ({
  isModalVisible,
  hideModal,
  onConfirm,
  description,
}) => {
  const [value, setValue] = useState("");
  return (
    <Modal
      className="deleteScoreModal"
      closable={false}
      visible={isModalVisible}
      onOk={hideModal}
      onCancel={hideModal}
      footer={null}
      style={{ borderRadius: "20px" }}
      afterClose={() => setValue("")}
    >
      <Row justify="center">
        <Col span={24}>
          <Typography.Title className="deleteScoreModalTitle">
            Are you sure?
          </Typography.Title>
          <Typography.Text className="deleteScoreModalText">
            {description}
          </Typography.Text>
        </Col>
        <Col className="mt-5">
          <Typography.Text className="deleteScoreModalText">
            Type DELETE to confirm
          </Typography.Text>
          <div className="deleteScoreModalFooterField">
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ height: "2.5rem" }}
              size="small"
              placeholder="DELETE"
              suffix={
                <>
                  <Button
                    className={
                      value.toLowerCase() == "delete"
                        ? "deleteContainerButton"
                        : ""
                    }
                    type="primary"
                    disabled={value.toLowerCase() !== "delete"}
                    onClick={() => {
                      if (value.toLowerCase() === "delete") onConfirm();
                    }}
                  >
                    DELETE
                  </Button>
                  <Button onClick={hideModal} type="primary">
                    Cancel
                  </Button>
                </>
              }
            />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ConfirmDeleteModal;

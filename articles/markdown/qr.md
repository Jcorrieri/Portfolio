# QR Decomposition with NumPy

Using Numpy for QR Decomposition and RQ Decomposition

> **Tags:** Linear Algebra, Computer Vision

----------

## Definition

QR decomposition is a process of taking any real matrix, A, and representing it as an orthogonal matrix, Q, and an upper-triangular matrix R, i.e. A = QR.

An orthogonal matrix is one such that all its column vectors are perpendicular to each other and of unit norm, and an upper-triangular matrix has non-zero elements only on or above the diagonal. 

This is useful in a number of applications, including camera calibration in computer vision. 

The QR decomposition can be computed using the Gram-Schmidt process.

## Code

```
M = np.random.rand((3, 3))

Q = np.zeros((3, 3))
R = np.zeros((3, 3))
for i in range(0, M.shape[1]):
  ai = M[:, i]
  ai_perp = ai

  for j in range(0, i):
    qj = Q[:, j]
    dot_prod = (ai @ qj)
    ai_perp -=  dot_prod * qj
    R[j, i] = dot_prod

  ai_perp_norm = np.linalg.norm(ai_perp)
  R[i, i] = ai_perp_norm
  q = (ai_perp / ai_perp_norm)
  Q[:, i] = q[:]
```

## Camera Calibration

Given a calibration matrix P, we can use QR decomposition to find the intrinsic parameter matrix K and the extrinsic parameter matrix R. 

The camera calibration matrix P contains the 3x3 upper-left submatrix M, where M = KR. K and R can be dervied by taking the QR decomposition of M^-1. Techically, this is taking the RQ decomposition of M. 

Note that the "R" matrix in QR decomposition does not correspond with the extrinsic parameter matrix "R" in camera calibration. To avoid confusion, I will refer to the upper-triangular matrix R as U during the calculations. 
- Q: Orthogonal Matrix
- U: Upper-Triangular Matrix

Want: M = KR = UQ 

M^(−1) = QU

(M^(−1))^(−1) = (QU)^(−1)

M = U^(−1)Q

Since U is upper-triangular, so is U^(−1). Similarly, since Q is orthogonal, so is
Q^(−1) = QT . Therefore,
• K = U^(−1)
• R = QT

```
M_inv = np.linalg.inv(M)

Q = np.zeros((3, 3))
R = np.zeros((3, 3))
for i in range(0, M_inv.shape[1]):
  ai = M_inv[:, i]
  ai_perp = ai

  for j in range(0, i):
    qj = Q[:, j]
    dot_prod = (ai @ qj)
    ai_perp -=  dot_prod * qj
    R[j, i] = dot_prod

  ai_perp_norm = np.linalg.norm(ai_perp)
  R[i, i] = ai_perp_norm
  q = (ai_perp / ai_perp_norm)
  Q[:, i] = q[:]

K = np.linalg.inv(R)
R = Q.T
```